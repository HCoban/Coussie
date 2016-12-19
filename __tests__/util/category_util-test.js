import {
  fetchAllCategories,
  fetchSingleCategory
} from '../../frontend/util/category_util';

describe('category_util', () => {

  let mockSuccessCallback;

  beforeEach(() => {
    global.$ = require.requireMock('jquery');
    mockSuccessCallback = jest.fn(() => 'mock success');
  });

  afterEach(() => {
    global.$.ajax.mockClear();
  });

  describe('fetchAllCategories', () => {

    it('makes an ajax request that fetches all categories', () => {
      fetchAllCategories(mockSuccessCallback);
      expect($.ajax).toBeCalled();

      const ajaxCallArg = $.ajax.mock.calls[0][0];
      expect(ajaxCallArg.url).toEqual('api/categories');
    });

    it('triggers the success callback', () => {
      fetchAllCategories(mockSuccessCallback);

      const ajaxCallArg = $.ajax.mock.calls[0][0];
      ajaxCallArg.success('dummy result');
      expect(mockSuccessCallback).toBeCalledWith('dummy result');
    });
  });

  describe('fetchSingleCategory', () => {

    it('makes an ajax request that fetches a single category', () => {
      fetchSingleCategory(1, mockSuccessCallback);
      expect($.ajax).toBeCalled();

      const ajaxCallArg = $.ajax.mock.calls[0][0];
      expect(ajaxCallArg.url).toEqual('api/categories/1');
    });

    it('triggers the success callback', () => {
      fetchSingleCategory(1, mockSuccessCallback);

      const ajaxCallArg = $.ajax.mock.calls[0][0];
      ajaxCallArg.success('dummy result');
      expect(mockSuccessCallback).toBeCalledWith('dummy result');
    });
  });
});
