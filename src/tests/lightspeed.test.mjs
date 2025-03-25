//import function to test && import node-fetch module
import { beforeEach, it } from 'node:test';
import { getAccsessToken } from '../services/lightspeed.mjs';
import fetch from 'node-fetch';

//couldnt find what this shit does but just the syntax lmao
jest.mock('node-fetch', () => jest.fn());

//describe(name, fn): - used for grouping related objects (strings?)
describe('getAccessToken', () => {
//clear mocks I think
//tf is a mock?
beforeEach(() => {
    fetch.mockClear();
});

//syntax for below function
//it('expectation', function() {expect(true).toBe(true);});
it('should return an access token when API call succeeds', async () => {
    // Simulate a successful API response with a fake access token
    const fakeResponse = {
      ok: true,
      json: async () => ({ access_token: 'fake_token' })
    };
    // When getAccessToken calls fetch, it will resolve with fakeResponse
    fetch.mockResolvedValue(fakeResponse);

    const token = await getAccessToken();
    expect(token).toBe('fake_token');
  });

 it('should throw an error when API call fails', async() => {
    //make it fail the call
    const fakeResponse = {
        ok: false,
        statusText: 'Bad Request'
    };
    fetch.mockResolvedValue(fakeResponse);

    //this should return getAccessToken() to toss a error with a set message
    await expect(getAccsessToken()).rejects.toThrow('Failed to refresh token: Bad Request');
    });
});