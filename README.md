1.Δημιούργησε ένα .env file (root)
2.Πέρασε το ΜοngoDB connection string σαν MONGO_URI="το mongo string της βάσης σου" σε .env
3.Ενεργοποίησε το authentication με SECRET_KEY="your_secret_key" σε .env
4.τρέξε npm i
5.τρέξε npm run start (τρέχει σε local-port 3000) αν :
Listening on 3000
Connection Successful
στην κονσόλα τότε όλα καλά
6.μπες στο www_project
7.τρέξε npm i
8.τρέξε npm run dev (τρέχει στο 8080 και χτυπάει το 3000)

Τα ports έχουν σημασία για το cors origin οποιαδήποτε αλλαγή σε ports πρέπει να αλλάξει επίσης το cors config στο index.js του www_project_api
