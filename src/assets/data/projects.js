import { v4 as uuidv4 } from 'uuid';
import PortfolioImg from '../images/undraw_portfolio-feedback_4iok.svg';
import TravelBlog from '../images/undraw_vintage_q09n.svg';
import WebScrapping from '../images/undraw_website-visitors_qy9c.svg';
import HousePrices from '../images/undraw_house-searching_g2b8.svg';
import Xray from '../images/undraw_medical-research_pze7.svg';
import Comments from '../images/undraw_sentiment-analysis_rke9.svg';

const projects = [
  {
    id: uuidv4(),
    name: 'Travel Blogger',
    desc: `A website where one can register, login to their account and post or edit or delete blogs. The website is made using python's flask framework using Jinja.`,
    img: TravelBlog,
    link: 'https://github.com/sayali-martal/BlogApp',
  },
  {
    id: uuidv4(),
    name: 'Portfolio',
    desc: `The website has my portfolio which is made using React JS and is hosted on Netlify`,
    img: PortfolioImg,
    link: 'https://github.com/sayali-martal/Portfolio',
  },
  {
    id: uuidv4(),
    name: 'Web Scrapping and Analysing',
    desc: `This project aim towards collecting data from fundrazr site for category animals and using the data to analyse whether a particular campaign is going to reach its goal or not.`,
    img: WebScrapping,
    link: 'https://github.com/sayali-martal/Web-scrapping-and-analysing',
  },
  {
    id: uuidv4(),
    name: 'House Prices Advanced Regression Techniques',
    desc: `Kaggle competition for predicting sales prices and practice feature engineering, RFs, and gradient boosting. Using random forest regressor, lasso, ridge and xgboost algorithms together I was able to achieve score of 0.13774.`,
    img: HousePrices,
    link: `https://github.com/sayali-martal/House-Prices-Advanced-Regression-Techniques`,
  },
  {
    id: uuidv4(),
    name: 'Detection of Pneumonia from X-ray Images',
    desc: `Using convolutional neural network to detect if a patient has pneumonia or not using x-ray samples of their chests. Used dataset from kaggle for computations. For the dataset model has achieved accuracy above 80% on test set.`,
    img: Xray,
    link: `https://github.com/sayali-martal/Deep-learning-for-detecting-pneumonia-from-x-ray-images`,
  },
  {
    id: uuidv4(),
    name: 'Sarcasm Detector',
    desc: `Model to predict if the comment is sarcastic or not using natural language processing.`,
    img: Comments,
    link: 'https://github.com/sayali-martal/Sarcasm_detector',
  },
];

export default projects;
