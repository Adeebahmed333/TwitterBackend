import {getTweet} from '../../src/controllers/tweet-controller.js';
import {mockRequest,mockResponse} from '../common-mocks.js';
import TweetService from '../../src/services/tweet-service.js';
jest.mock('../../src/services/tweet-service.js');

test('should return a tweet',async ()=>{
    const req = mockRequest();
    const res = mockResponse();
    const response = [
        {
           content: "This is a tweet",
        },
        {
           content: "This is another tweet",
        },
        {
            content: "This is a third tweet",
        }
    ];
    (TweetService.prototype.get).mockResolvedValue(response);
    await getTweet(req,res);
    expect(res.json).toHaveBeenCalledWith({
        success: true,
        massage: "Successfully Fetched the Tweet",
        data: response,
        err: {},
      });
      expect(res.status).toHaveBeenCalledWith(200);
});