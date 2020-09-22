require("@babel/polyfill");
import Search from "./model/Search";
// import axios from "axios";
// **
// **Вэб аппын State буюу төлөв
// **
// const state = {};
// const controlSearch = () => {
//   //   1.вэбээс хайлтын түлхүүр үгийг гаргаж авна.

//   const query = "pizza";

//   if (query) {
//     //   2.Шинээр хайлтын обьектыг үүсгэж өгнө.
//     state.search = new Search(query);
//     //   3. Хайлт хийхэд зориул дэлгэцийн UI бэлтгэнэ.
//     // 4. Хайлтыг гүйцэтгэнэ.
//     await state.search.doSearch();
//     // 5.Хайлтын үр дүнг дэлгэцэнд үзүүлнэ.
//   }
// };

// document.querySelector(".search").addEventListener("submit", (e) => {
//   e.preventDefault();
//   controlSearch();
// });

let search = new Search("pasta");
search.doSearch().then((r) => console.log(r));
