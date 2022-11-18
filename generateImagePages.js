
const fs = require("fs");

const getHtml = (relPath, altText) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <meta name="author" content="Daniel Kukucska" />
    <meta name="description" content="Webdevelopment I. - First assessment" />
    <title>Gallery</title>
    <link
      rel="icon"
      type="image/x-icon"
      href="/webprog1beadando1/public/images/favicon-32x32.png"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
      crossorigin="anonymous"
      defer
    ></script>
    <link rel="stylesheet" href="/webprog1beadando1/public/styles/main.css" />
  </head>

  <body class="d-flex flex-column justify-content-between gap-4 min-vh-100">
          <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a href="/webprog1beadando1" class="navbar-brand">Daniel Kukucska</a>
          <button
            class="btn btn-dark navbar-toggler border-3 px-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas"
            aria-controls="offcanvas"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-start-md bg-dark d-flex align-items-md-end"
            tabindex="-1"
            id="offcanvas"
            aria-labelledby="offcanvasLabel"
          >
            <div class="offcanvas-header d-flex d-md-none">
              <h5 class="offcanvas-title text-white" id="offcanvasLabel">
                Daniel Kukucska
              </h5>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a href="/webprog1beadando1/" class="nav-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      class="bi bi-house-door d-md-block"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"
                      />
                    </svg>
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/webprog1beadando1/pages/resume.html" class="nav-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      class="bi bi-file-earmark-person d-md-block"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path
                        d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z"
                      />
                    </svg>
                    Resume
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/webprog1beadando1/pages/subjects.html" class="nav-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      class="bi bi-journal-code d-md-block"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708z"
                      />
                      <path
                        d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"
                      />
                      <path
                        d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"
                      />
                    </svg>
                    Subjects
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/webprog1beadando1/pages/calendar.html" class="nav-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      class="bi bi-calendar-date d-md-block"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"
                      />
                      <path
                        d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                      />
                    </svg>
                    Calendar
                  </a>
                </li>
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle active" href="/webprog1beadando1/pages/gallery" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      class="bi bi-images d-md-block"
      viewBox="0 0 16 16"
    >
      <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
      <path
        d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"
      />
    </svg>
      Gallery
    </a>
    <ul class="dropdown-menu dropdown-menu-dark">
      <li><a class="dropdown-item" href="/webprog1beadando1/pages/gallery/PeterGriffin">Peter Griffin</a></li>
      <li><a class="dropdown-item" href="/webprog1beadando1/pages/gallery/StewieGriffin">Stewie Griffin</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="/webprog1beadando1/pages/gallery">All</a></li>
    </ul>
  </li>
                <li class="nav-item">
                  <a href="/webprog1beadando1/pages/videos.html" class="nav-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      class="bi bi-collection-play d-md-block"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1zm2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5z"
                      />
                      <path
                        d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5h13z"
                      />
                    </svg>
                    Videos
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/webprog1beadando1/pages/chess.html" class="nav-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      class="bi bi-controller d-md-block"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z"
                      />
                      <path
                        d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z"
                      />
                    </svg>
                    Chess
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

    <main>
      <div class="container my-3 p-0 rounded-3 border shadow-md">
        <img
          src="${relPath}"
          class="w-100 shadow-1-strong rounded"
          alt="${altText}"
        />
      </div>
    </main>

    <footer
      class="container d-flex flex-wrap justify-content-between align-items-center my-4 border-top"
    >
      <div class="col-md-4 d-flex align-items-center">
        <span class="md-0 text-muted">&copy; 2022, Daniel Kukucska</span>
      </div>

      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3">
          <a
            class="text-muted"
            href="mailto:daniel.kukucska.txt@gmail.com?Subject=Webprogramozás%20I."
            target="_blank"
          >
                         <img src="/webprog1beadando1/public/images/icons/envelope.svg" alt="Envelope icon">
          </a>
        </li>
        <li class="ms-3">
          <a
            class="text-muted"
            href="https://github.com/danielkukucska"
            target="_blank"
          >
            <img src="/webprog1beadando1/public/images/icons/github.svg" alt="GitHub icon">
          </a>
        </li>
      </ul>
    </footer>
  </body>
</html>
`
const images = [
    {filePath: "./pages/gallery/PeterGriffin/americanHat.html",relPath: "/webprog1beadando1/public/images/gallery/PeterGriffin/american-hat.jpg", altText: "Peter Griffin in an american hat"},
    {filePath: "./pages/gallery/PeterGriffin/backWardsBaseballHat.html",relPath: "/webprog1beadando1/public/images/gallery/PeterGriffin/backwaards-baseball-hat.jpg", altText: "Peter Griffin in baseball hat"},
    {filePath: "./pages/gallery/PeterGriffin/baseballHat.html",relPath: "/webprog1beadando1/public/images/gallery/PeterGriffin/baseball-hat.jpg", altText: "Peter Griffin in baseball hat"},
    {filePath: "./pages/gallery/PeterGriffin/cactusHat.html",relPath: "/webprog1beadando1/public/images/gallery/PeterGriffin/cactus-hat.jpg", altText: "Peter Griffin in cactus hat"},
    {filePath: "./pages/gallery/PeterGriffin/chimneyPotHat.html",relPath: "/webprog1beadando1/public/images/gallery/PeterGriffin/chimney-pot-hat.jpg", altText: "Peter Griffin in chimney-pot hat"},
    {filePath: "./pages/gallery/PeterGriffin/cowBoyHat1.html",relPath: "/webprog1beadando1/public/images/gallery/PeterGriffin/cowboy-hat1.png", altText: "Peter Griffin in cowboy hat"},
    {filePath: "./pages/gallery/PeterGriffin/cowBoyHat2.html",relPath: "/webprog1beadando1/public/images/gallery/PeterGriffin/cowboy-hat2.jpg", altText: "Peter Griffin in cowboy hat"},
    {filePath: "./pages/gallery/PeterGriffin/cowBoyHat3.html",relPath: "/webprog1beadando1/public/images/gallery/PeterGriffin/cowboy-hat3.jpg", altText: "Peter Griffin in cowboy hat"},
    {filePath: "./pages/gallery/PeterGriffin/cowBoyHat4.html",relPath: "/webprog1beadando1/public/images/gallery/PeterGriffin/cowboy-hat4.jpg", altText: "Peter Griffin in cowboy hat"},
    {filePath: "./pages/gallery/PeterGriffin/extraLongChimneyPotHat.html",relPath: "/webprog1beadando1/public/images/gallery/PeterGriffin/extra-long-chimney-pot-hat.jpg", altText: "Peter Griffin in  chimney-pot hat"},
    {filePath: "./pages/gallery/PeterGriffin/huntingHat.html",relPath: "/webprog1beadando1/public/images/gallery/PeterGriffin/hunting-hat.jpg", altText: "Peter Griffin in hunting hat"},
    {filePath: "./pages/gallery/PeterGriffin/marineHat.html",relPath: "/webprog1beadando1/public/images/gallery/PeterGriffin/marine-hat.jpg", altText: "Peter Griffin in marine hat"},
    {filePath: "./pages/gallery/PeterGriffin/pirateHat.html",relPath: "/webprog1beadando1/public/images/gallery/PeterGriffin/pirate-hat.jpg", altText: "Peter Griffin in pirate hat"},
    {filePath: "./pages/gallery/PeterGriffin/sortingHat.html",relPath: "/webprog1beadando1/public/images/gallery/PeterGriffin/sorting-hat.jpg", altText: "Peter Griffin in sorting hat"},
    {filePath: "./pages/gallery/PeterGriffin/yellowHat.html",relPath: "/webprog1beadando1/public/images/gallery/PeterGriffin/yellow-headgear.jpg", altText: "Peter Griffin in yellow hat"},

    {filePath: "./pages/gallery/StewieGriffin/arrow.html",relPath: "/webprog1beadando1/public/images/gallery/StewieGriffin/arrow.jpg", altText: "Stewie Griffin with arrow"},
    {filePath: "./pages/gallery/StewieGriffin/bazooka.html",relPath: "/webprog1beadando1/public/images/gallery/StewieGriffin/bazooka.jpg", altText: "Stewie Griffin with bazooka"},
    {filePath: "./pages/gallery/StewieGriffin/desertEagle.html",relPath: "/webprog1beadando1/public/images/gallery/StewieGriffin/desert-eagle.jpg", altText: "Stewie Griffin with desert eagle"},
    {filePath: "./pages/gallery/StewieGriffin/flame.html",relPath: "/webprog1beadando1/public/images/gallery/StewieGriffin/flame.webp", altText: "Stewie Griffin with flame"},
    {filePath: "./pages/gallery/StewieGriffin/machineGun.html",relPath: "/webprog1beadando1/public/images/gallery/StewieGriffin/machine-gun.webp", altText: "Stewie Griffin with machine gun"},
    {filePath: "./pages/gallery/StewieGriffin/miniUzi.html",relPath: "/webprog1beadando1/public/images/gallery/StewieGriffin/mini-uzi.jpg", altText: "Stewie Griffin with mini uzi"},
    {filePath: "./pages/gallery/StewieGriffin/neuroBlaster.html",relPath: "/webprog1beadando1/public/images/gallery/StewieGriffin/neuro-blaster.jpg", altText: "Stewie Griffin with neuro blaster"},
    {filePath: "./pages/gallery/StewieGriffin/revolver.html",relPath: "/webprog1beadando1/public/images/gallery/StewieGriffin/revolver.jpg", altText: "Stewie Griffin with revolver"},
    {filePath: "./pages/gallery/StewieGriffin/sandwich.html",relPath: "/webprog1beadando1/public/images/gallery/StewieGriffin/sandwich-gun.jpg", altText: "Stewie Griffin with sandwich gun"},
    {filePath: "./pages/gallery/StewieGriffin/shotgun.html",relPath: "/webprog1beadando1/public/images/gallery/StewieGriffin/shotgun.jpg", altText: "Stewie Griffin with shotgun"},
    {filePath: "./pages/gallery/StewieGriffin/sniper.html",relPath: "/webprog1beadando1/public/images/gallery/StewieGriffin/sniper.jpg", altText: "Stewie Griffin with sniper"},
    
]


images.forEach(image => {
    fs.appendFile(image.filePath, getHtml(image.relPath,image.altText), function (err) {
        if (err) throw err;
        console.log(`${image.filePath}: Saved!`);
      });
})