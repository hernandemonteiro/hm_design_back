
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
            src="https://doc-10-0o-docs.googleusercontent.com/docs/securesc/rsvalvqlqbbis11vij0jvsd45e7emm0r/ss75abntnts0u8r0077nukplbdl4l1ku/1666716600000/04962512627974799525/03774904808948709139Z/1wJDZcEPfFGJ2WqvJX_2zFuBVeeRryo7B?e=view&uuid=3af9194b-c8d6-43ab-acd8-0eab8d4535d3&nonce=76sqcittr1j88&user=03774904808948709139Z&hash=9nk7246kqai4vaq2d1mri2kjhsplumdl"
          />
        </div>
      </body>
    </html>`;
}