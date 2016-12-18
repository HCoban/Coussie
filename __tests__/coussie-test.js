describe('entry', () => {
  let Entry;

  beforeEach(() => {
    document.addEventListener = jest.fn();
    Entry = require('../frontend/coussie');
  });

  it('sets a listener for the DOMContentLoaded event', () => {
    const eventListener = document.addEventListener.mock.calls;

    expect(document.addEventListener).toBeCalled();
    expect(eventListener[0][0]).toEqual('DOMContentLoaded');
  });
});
