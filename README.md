
# in order to use page speed insights follow these steps

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```


# if you are not using pagespeed insights use these instructions
open index.html in your favorite web browser

optimizations were made to index.html, main.js and pizza.html to increase load times and framerate