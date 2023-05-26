from flask import Flask, request
import pickle
import requests
import pandas as pd


similarity = pickle.load(open('./model/similarity.pkl','rb'))
movies_dict = pickle.load(open('./model/movie_dict.pkl','rb'))
movies = pd.DataFrame(movies_dict)

def fetch_poster(movie_id):
    link = []
    url = "https://api.themoviedb.org/3/movie/{}?api_key=<YOUR_API_KEY_HERE>&language=en-US&append_to_response=videos".format(movie_id)
    data = requests.get(url)
    data = data.json()
    poster_path = data['poster_path']
    imdb_id = data['imdb_id']
    rating = data['vote_average']
    link.append(poster_path)
    link.append(imdb_id)   
    link.append(rating)
    return link

def recommend(movie):
    index = movies[movies['title'] == movie].index[0]
    distances = sorted(list(enumerate(similarity[index])),reverse=True,key = lambda x: x[1])
    final_data = []
    for i in distances[1:6]:
        movie_id = movies.iloc[i[0]].movie_id
        object = {
            'id':fetch_poster(movie_id)[1],
            'title':movies.iloc[i[0]].title,
            'link':fetch_poster(movie_id)[0],
            'rate':fetch_poster(movie_id)[2],
        }
        final_data.append(object)
    return final_data

app = Flask(__name__)

input_value = []

@app.route('/data', methods=['POST'])
def handle_data():
    input = request.json['inputbox']
    input_value.append(input)
    return 'Success'


@app.route('/data')
def serve():
    # Returning an api for showing in  reactjs
    input_value_name = input_value[0]
    input_value.clear()
    return recommend(input_value_name)
   

if __name__ == "__main__":
    app.run(debug=True)
    app.run(host='0.0.0.0')
