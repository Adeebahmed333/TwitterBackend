import TweetRepository from "../../src/repository/tweet-repository.js";
import Tweet from "../../src/models/tweet.js";

jest.mock("../../src/models/tweet.js");

describe("create tweet test", () => {
  test("should create a tweet and return it", async () => {
    const data = {
      content: "Testing Tweet",
    };
    const spy = jest.spyOn(Tweet, "create").mockImplementation(() => {
      return { ...data, createdAt: Date.now(), updatedAt: Date.now() };
    });
    const tweetRepository = new TweetRepository();
    const tweet = await tweetRepository.create(data);
    expect(spy).toHaveBeenCalled();
    expect(tweet.content).toBe(data.content);
  });

  test("should not create a tweet and throw exception", async () => {
    const data = {
      content: "Testing Tweet",
    };
    const spy = jest.spyOn(Tweet, "create").mockImplementation(() => {
      throw new Error("Error is thrown");
    });
    const tweetRepository = new TweetRepository();
    const tweet = await tweetRepository.create(data).catch((err) => {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe("Error is thrown");
    });
  });
});

describe("to get all tweet", () => {
  test("should return the same number of tweet as  the specified limit  ", async () => {
    const data = {
      content: "Testing Tweet",
    };
    const tweetsArray = [
      { ...data, createdAt: Date.now(), updatedAt: Date.now() },
      { ...data, createdAt: Date.now(), updatedAt: Date.now() },
    ];
    const findResp = { tweetsArray };
    findResp.limit = jest.fn((limit) => findResp.tweetsArray.slice(0, limit));
    findResp.skip = jest.fn((offset) => findResp);
    const spy = jest.spyOn(Tweet, "find").mockImplementation(() => {
      return findResp;
    });
    const tweetRepository = new TweetRepository();
    const tweet = await tweetRepository.getAll(0, 2);
    expect(spy).toHaveBeenCalled();
    expect(tweet).toHaveLength(2);
  });
});
