'use strict';

const fs = require('fs');
const https = require('https');

/*
 * Complete the 'getArticleTitles' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING author as parameter.
 * 
 * URL for cut and paste: 
 * https://jsonmock.hackerrank.com/api/articles?author=<authorName>&page=<num>
 *
 */

async function getArticleTitles(author) {

    let titles = [];

    const getPromise = (author, pagenumber) => {
        return new Promise((resolve, reject) => {
            https.get(`https://jsonmock.hackerrank.com/api/articles?author=${author}&page=${pagenumber}`, (response) => {
                let data = '';

                response.on('data', (chunk) => {
                    data += chunk;
                });

                response.on('end', () => {
                    resolve({ ...JSON.parse(data) })
                });

                response.on('error', (error) => {
                    reject(error);
                })
            });
        });
    }

    try {
        const articles = await getPromise(author, 1);

        articles.data.forEach(article => {
            if (article.title) {
                titles.push(article.title)
            } else if (article.story_title) {
                titles.push(article.story_title)
            }
        });

        if (articles.total_pages > 1) {

            for (let i = 2; i < articles.total_pages + 1; i++) {

                let moreArticles = await getPromise(author, i);

                moreArticles.data.forEach(article => {
                    if (article.title) {
                        titles.push(article.title)
                    } else if (article.story_title) {
                        titles.push(article.story_title)
                    }
                });
            }
        }

    } catch (error) {
        console.log(error)
    }

    return titles;

}


getArticleTitles("saintamh");
