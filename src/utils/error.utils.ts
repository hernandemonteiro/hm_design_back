
export function errorPage() {
    return `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8"/>
        <style>
          * {
            margin: 0px;
            padding: 0px;
          }
          body {
            display: flex;
            width: 100%;
            background-color: black;
            color: white;
            height: 70vh;
            justify-content: center;
            align-items: center;
          }
          div {
            text-align: center;
            padding: 15%;
          }
          img {
            width: 75%;
          }
          @media (max-width: 800px) {
            div {
              padding: 2%;
            }
            img {
              width: 100%;
            }
          }
          @media only screen and (min-device-width: 120px) and (max-device-width: 800px) {
            div {
              padding: 2%;
              overflow: hidden;
            }
            img {
              width: 110%;
            }
          }
        </style>
      </head>
      <body>
        <div>
          <h1>You are not Authenticated</h1><br />
          <img
            src="https://drive.google.com/uc?export=view&id=1wJDZcEPfFGJ2WqvJX_2zFuBVeeRryo7B"
          />
        </div>
      </body>
    </html>`;
}