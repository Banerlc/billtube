import axios from 'axios'
console.log(process.env.REACT_APP_YT_API_KEY)
const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: 'AIzaSyA2c-BTA89tV0DlMYDs53iCuZG0dEU_AHw',
   },
})

export default request
