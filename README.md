# listofstudent
This app is useful for making students list . In list we can add data, Update and delete And sorted name and his skills.Search Bar is included to see the details of particular student.

#Prerequisites
You need to install following backend Packages
```asgiref==3.2.3
Django==3.0.1
django-cors-headers==3.2.0
django-jsonfield==1.4.0
djangorestframework==3.11.0
pkg-resources==0.0.0
pytz==2019.3
six==1.13.0
sqlparse==0.3.0
psycopg2==2.7.4
```

# Installation
Clone the repository

```
git clone https://github.com/akashdp9/listofstudent/
```

Setting up the Virtual Environment

```
python3 -m venv virtualenv
```

Activating Virtual Environment

```
source virtualenv/bin/activate
```
Once the repository is cloned and virtual environment set up, go to the directory where the requirements.txt(/React/studentlist$ ) is and type the following code in your terminal:

```
pip install -r requirements.txt
```

# Database(db.SQlite3):

Using cloud database which is provided by django.

Create database

```
python3 manage.py migrate
```
When changing any field(add new field, Rename, Delete)

```
python3 manage.py makemigrations
```

For Frontend which is ReactJS, Dependencies are:

```
"nodejs":"^v8.10.0",
"npm":"^6.13.4",
"react": "^16.12.0",
"react-dom": "^16.12.0",
"react-router-dom": "^5.1.2",
"react-scripts": "0.9.5"

```
Go to react app  in the terminal:
```
"sudo apt install nodejs",
"node --version",
"npm install", 
"npm -v",
```
Go to install axios for fetching data from backend
```
npm install axios
```
Then to run the react server, type the code:
```
npm start
```


# Image
!alt[img]()
