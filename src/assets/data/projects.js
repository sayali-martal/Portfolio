import { v4 as uuidv4 } from 'uuid';
import PortfolioImg from '../images/portfolio.jpg';
import TravelBlog from '../images/travelblog.jpg';
import WebScrapping from '../images/webscrapping.jpg';
import HousePrices from '../images/houseprices.jpg';
import Xray from '../images/xray.jpg';
import Comments from '../images/comments.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Travel Blogger',
    desc:
      "A website where one can register, login to their account and post or edit or delete blogs. The website is made using python's flask framework using Jinja.",
    img: TravelBlog,
  },
  {
    id: uuidv4(),
    name: 'Portfolio',
    desc:
      'The website has my portfolio which is made using React JS and is hosted on Netlify',
    img: PortfolioImg,
  },
  {
    id: uuidv4(),
    name: 'Web Scrapping and Analysing',
    desc:
      'This project aim towards collecting data from fundrazr site for category animals and using the data to analyse whether a particular campaign is going to reach its goal or not.',
    img: WebScrapping,
  },
  {
    id: uuidv4(),
    name: 'House Prices Advanced Regression Techniques',
    desc:
      'Kaggle competition for predicting sales prices and practice feature engineering, RFs, and gradient boosting. Using random forest regressor, lasso, ridge and xgboost algorithms together I was able to achieve score of 0.13774.',
    img: HousePrices,
  },
  {
    id: uuidv4(),
    name: 'Detection of Pneumonia from X-ray Images',
    desc:
      'Using convolutional neural network to detect if a patient has pneumonia or not using x-ray samples of their chests. Used dataset from kaggle for computations. For the dataset model has achieved accuracy above 80% on test set.',
    img: Xray,
  },
  {
    id: uuidv4(),
    name: 'Sarcasm Detector',
    desc:
      'Model to predict if the comment is sarcastic or not using natural language processing.',
    img: Comments,
  },
];

export default projects;
