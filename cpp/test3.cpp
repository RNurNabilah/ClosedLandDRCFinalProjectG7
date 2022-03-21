#include <iostream>
#include <stdio.h>
#include <curl/curl.h>
using namespace std;

int main(void) {
    CURL *curl;
    CURLcode response;

    curl_global_init(CURL_GLOBAL_ALL);

    curl = curl_easy_init();
    if(curl) {
        curl_easy_setopt(curl, CURLOPT_URL, "https://api.opensea.io/api/v1/collections?offset=0&limit=300'");

        response = curl_easy_perform(curl);

        if(response != CURLE_OK) {
            fprintf(stderr, "Request failed: %s\n", curl_easy_strerror(response));
        } else {
            //printf(response);
            cout << response;
        }
        curl_easy_cleanup(curl);
    }
    curl_global_cleanup();
    return 0;
}