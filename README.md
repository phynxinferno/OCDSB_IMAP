# OCDSB_IMAP

> Simple translation layer to use enterprise gmail accoutns with IMAP disabled with IMAP-based email clients(e.g. [Thunderbird](https://www.thunderbird.net) or basically any stock mail app)

<details>
  <summary>How</summary>

1. Clone or otherwise download the repository contents

2. Install the latest [Node.js LTS](https://nodejs.org/en) for your operating system

3. Install Node.js modules with `npm install`

4. Open [Google Apps Script](https://script.google.com) with the Google account you plan to use for email

5. Create a new project

6. Paste the contents of `appsScript.gs`

7. Click `deploy` and deploy as a `web app` with access set to `anyone`

8. Copy the public url. Do not share it with anyone you don't want to give full access to your email account.

9. Run the script once with `node index`

10. Paste it into the  `"url"` field in the newly created `config.json`

11. Run the script again and set up your email client with the provided credentials


**IMPORTANT: This server is intended to run exclusively on your local machine as it does not implement authentication. For use with multiple computers, set up the server independently on each one. Multiple servers on the same account can share an Apps Script project.**

</details>


<details>
  <summary>
    Why
  </summary>

- Third-party email clients allow you to read email offline, and often have more features and integrate better with your OS than GMail.

- The GMail webapp on OCDSB google accounts essentially functions as a keylogger due to the board's use of [Google Vault](https://support.google.com/vault/answer/2462365?hl=en). This allows the board to read deleted emails, drafts, and even deleted unsaved drafts. This script circumvents the client-side keylogger, though the board will still be able to read your sent emails if you don't [encrypt them with PGP](https://www.openpgp.org/)

</details>
