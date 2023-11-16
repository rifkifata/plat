<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/rifkifata/plate">
    <img src="images/logo.jpg" alt="Logo" height="80">
  </a>

<h3 align="center">Indonesian Plate Police Number Vehicle API</h3>

  <p align="center">
    A Complete List of Indonesian Vehicle Number Plate Codes
    <br />
    <br />
    <a href="https://appcyclic">View Demo</a>
    ·
    <a href="https://github.com/rifkifata/plate/issues">Report Bug</a>
  </p>
</div>

## About

This project is useful for finding out the area of origin of the vehicle when you first bought it, you just need to enter the area code at the front and at the end of the vehicle plate number that you want to search for.

You can also use the Public API that we created for your application to consume **for free**

You can grab the data in `area.json` for free and put it into your database for reuse

[![Indonesian Plate Number Screen Shot][product-screenshot]](https://appcyclic)

### Built With

- Node.js
- Express
- Async

<!-- GETTING STARTED -->

## Brace Your Self

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/rifkifata/plate.git
   ```
2. Install NPM packages
   ```sh
   npm install --save
   ```
3. Start The Server
   ```sh
   node ./index.js
   ```

<!-- USAGE EXAMPLES -->

## Usage

As an Indonesian, I really understand how lazy we are and really like something that is free. so I created a Public API that you can access for free, and also I created an application that consumes this Public API that you can use as wisely.

### Rest Full API

1. Endpoint : `teuku.my.id`
2. Method : `POST`
3. Header :
4. Body :

   ```javascript
   {
   "areaCode" : "BL",
   "subAreaCode" : "Z"
   }
   ```

   in case : BL 00 N
   \*nb : 1. areaCode is mandatory 2. subAreaCode is optional 3. areaCode is like "BL" 4. subAreaCode is "N"

5. res

```javascript
{
  "areaCode": "BL",
  "subAreaCode": "A",
  "areaName": "Aceh",
  "subAreaName": "Kota Banda Aceh",
  "subAreaArr": [
      {
          "subAreaCode": "A",
          "subAreaName": "Kota Banda Aceh"
      },
      {
          "subAreaCode": "J",
          "subAreaName": "Kota Banda Aceh"
      },
      .
      .
      .
  ]
}
```

### Application

1. Access it at : [teuku.my.id/](https://teuku.my.id/)
2. If you are smart people, i think you should understand how to use it.

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Mail Me: [rifkifata@gmail.com](mailto:rifkifata@gmail.com)
Project Link: [https://github.com/rifkifata/plate](https://github.com/rifkifata/plate)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/rifkifata/plat.svg?style=for-the-badge
[contributors-url]: https://github.com/rifkifata/plate/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/rifkifata/plate.svg?style=for-the-badge
[forks-url]: https://github.com/rifkifata/plate/network/members
[stars-shield]: https://img.shields.io/github/stars/rifkifata/plate.svg?style=for-the-badge
[stars-url]: https://github.com/rifkifata/plate/stargazers
[issues-shield]: https://img.shields.io/github/issues/rifkifata/plate.svg?style=for-the-badge
[issues-url]: https://github.com/rifkifata/plate/issues
[product-screenshot]: images/screenshot.png
[Javascipt]: https://img.shields.io/badge/logo-javascript-blue?logo=javascript
