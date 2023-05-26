# Movie.ai

This is the Movie Recommendation System Project build using python and react
I have used React for frontend part and Flask for all the backend part.

# How this app works?

1. User searches for his/her favourite movie from give choices.
2. Based on given input using ***Cosine Similarity Algorithm***.
3. The movies which are very close to the input movie are found and sent to the web app through *API*.
4. Then using API all movies details are fetched and displayed to the User.

# How to get API Key

Create an account in [themoviedb](https://www.themoviedb.org/), click on the `API` link from the left hand sidebar in your account settings and fill all the details to apply for `API` key. If you are asked for the website URL, just give "NA" if you don't have one. You will see the `API` key in your API sidebar once your request is approved.

# Requirements
You need to have `npm`, `python` and `pip` installed in your system.

# How to Run this Project

1. **Clone** this repository in your local system.
2. Install all the libraries mentioned in the [requirements.txt](/flask-server/) file with the command `pip install -r requirements.txt`
3. Replace <YOUR_API_KEY_HERE> with your API_KEY in `/flask-server/app.py` at **line 13** and in `/client/src/components/Result.jsx` at **line 15**.
4. You need to install a additional folder named [model](https://mega.nz/file/xaF3HRha#R0pTbL9OOxhub517S34i_b4fp_OoMYDVMfOsbSd-96Y). I have uploaded these files on Mega.nz as they are too big to push on GitHub.
5. **Extract** Downloaded folder and copy this extracted folder to directory `/flask-server` 
6. Open your `terminal/command prompt` from your project directory then run `cd ./flask-server` command and run the `app.py` file by executing the command `python ./app.py` .
7. Now open another `terminal/command promp` in main directory and then run `cd ./client` command and run command `npm i`.
8. Then start react server by executing command `npm start`.
9. ***Congratulations!*** you have run the project.

**Please do ⭐ the repository and Share with your friends, if it helped you in anyway**.

# Dataset Source
  **[IMDB 5000 Movie Dataset](https://www.kaggle.com/datasets/carolzhangdc/imdb-5000-movie-dataset)**
  
# Output
## HomePage
![HomePage](https://github.com/AmanPathan/Movie-Recommendation-System-WebApp/assets/76259086/86e4d5f5-68f7-4f29-9504-024d4bd2bb52)

## Search Results
![Search Results](https://github.com/AmanPathan/Movie-Recommendation-System-WebApp/assets/76259086/17ce4931-562e-43ce-8205-e27d8ebd8a28)

## Trending Section
![Trending Section](https://github.com/AmanPathan/Movie-Recommendation-System-WebApp/assets/76259086/3cf7147d-abf6-4fb2-bca6-85a53a4c4c3f)
