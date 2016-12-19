import {
  signUp,
  logIn,
  logOut
} from '../../frontend/util/session_api_util';

describe('session_api_util', () => {

  let mockSuccessCallback;

  beforeEach(() => {
    global.$ = require.requireMock('jquery');
    mockSuccessCallback = jest.fn(() => 'mock success');
  });

  afterEach(() => {
    global.$.ajax.mockClear();
  });

  describe('signUp', () => {

    it('makes an ajax request that signs up user', () => {
      let user = { username: "user", password: "password" };
      signUp(user, mockSuccessCallback);
      expect($.ajax).toBeCalled();

      const ajaxCallArg = $.ajax.mock.calls[0][0];
      expect(ajaxCallArg.url).toEqual('api/users');
      expect(ajaxCallArg.type || ajaxCallArg.method).toMatch("POST");
      expect(ajaxCallArg.data).toEqual(user);
    });

    it('triggers the success callback', () => {
      let user = { username: "user", password: "password" };
      signUp(user, mockSuccessCallback);

      const ajaxCallArg = $.ajax.mock.calls[0][0];
      ajaxCallArg.success('dummy result');
      expect(mockSuccessCallback).toBeCalledWith('dummy result');
    });
  });

  describe('logIn', () => {

    it('makes an ajax request that logs in user', () => {
      let user = { username: "user", password: "password" };
      logIn(user, mockSuccessCallback);
      expect($.ajax).toBeCalled();

      const ajaxCallArg = $.ajax.mock.calls[0][0];
      expect(ajaxCallArg.url).toEqual('api/session');
      expect(ajaxCallArg.type || ajaxCallArg.method).toMatch('POST');
      expect(ajaxCallArg.data).toEqual(user);
    });

    it('triggers the success callback', () => {
      let user = { username: "user", password: "password" };
      logIn(user, mockSuccessCallback);

      const ajaxCallArg = $.ajax.mock.calls[0][0];
      ajaxCallArg.success('dummy result');
      expect(mockSuccessCallback).toBeCalledWith('dummy result');
    });
  });

  describe('logOut', () => {

    it('makes an ajax request that logs out user', () => {
      logOut(mockSuccessCallback);
      expect($.ajax).toBeCalled();

      const ajaxCallArg = $.ajax.mock.calls[0][0];
      expect(ajaxCallArg.url).toEqual('api/session');
      expect(ajaxCallArg.type || ajaxCallArg.method).toMatch('DELETE');
    });
  });
});
