import axios from 'axios'

/**
 * The URL:s.
 * @author Jacob Yousif
 *
 */
const POST_REST_API_URL = 'http://localhost:8080/addbox'
const GET_REST_API_URL = 'http://localhost:8080/listboxes'
const GET_SUMMARY_REST_API_URL = 'http://localhost:8080/summary'

/**
 * A service class for REST api requests: GET and POST.
 * @author Jacob Yousif
 *
 * @class RestService
 */
class RestService {

 post(data) {
  return axios.post(POST_REST_API_URL, data)
 }

 getAll() {
  return axios.get(GET_REST_API_URL);
 }

 getSummary() {
  return axios.get(GET_SUMMARY_REST_API_URL);
 }
}

export default new RestService()