// const express = require('express');
// const axios = require('axios');
// const multer = require('multer');
// const upload = multer();
// const router = express.Router();

// const productsCtrl = require('../controllers/product.js');

// /* GET home page. */
// router.get('/', (req, res) => {
//   res.render('product');
// });

// // create product card for products 
// // const card = (arr) => {
// //   const createCard = arr.reduce((acc, item) => {
// //       acc += `<div class="goods-card" val="${item.id}">
// //                 <div class="img"></div> 
// //                 <div class="name">
// //                   <a href="/:id">${item.name}</a>
// //                 </div>
// //                 <div class="price">$ ${item.price}</div>
// //               </div>`
// //       return acc;
// //   }, '');
// //   return createCard;
// // };

// // отдаем все книги из БД на фронт
// // router.post('/product',   (req, res) => { 
// //   //const getData = await productsCtrl.findAllGoods();
// //   //console.log('back', getData)
// //   //const findCategory = await createProduct.getCategory(selectCategory);
// //   //const categoryId = getData.category.map(val=>val._id);
// //   //console.log('id', products.getIdfromArr(getData))
// //   res.json({status: 'ok'});
// // });

// // router.post('/form', upload.none(), async (req, res) => {
// //   //console.log(req.body)
  
// //   const articleNew  =  sendArticles.saveArticle(req.body);     //сохранение в базу работает!!!!!!!!!!!!

// //   // const selectArticles = await sendArticles.selectName( 'name -_id' );
// //   //console.log('names', selectArticles)

// //   //res.json(selectArticles);
// //   res.json(articleNew)
// //   //res.json({ status: 'ok' });
// // });

// // находим все книги и отдаем на фронт для фильтрации
// // router.post('/find', upload.none(), async (req, res) => {
// //   console.log('req.body', req.body)

// //   const productsAll = await products.findAllGoods();
// //   //console.log('all books', allBooks)
 
  
// //   // const { articleTitle } = req.body;          // выводим имя для поиска из обьекта  
// //   // const titles = await sendBooks.findBook(articleTitle);
// //   // console.log(titles);                       // поиск документа (строки) по имени, работает !!!!!


// //   // const { authorBook } = req.body;      
// //   // const findAuthor = await sendBooks.findBook(authorBook);
// //   // console.log('author', ...findAuthor)

// //   // const { genreBook } = req.body;
// //   // const findGenre = await sendBooks.findBook(genreBook);
// //   // console.log('find genre', findGenre);   

// //   //res.json({ status: 'ok', })
// //   res.json(productsAll);
// // });


// // router.post('/find/:author', upload.none(), async (req, res) => {
// //   //console.log(req.body)
  
// //   const { authorBook } = req.body;      
// //   const findAuthor = await sendArticles.findInfoInArticle(authorBook);
// //   console.log(findAuthor)

// //   res.json(titles);
// // });


// module.exports = router;
