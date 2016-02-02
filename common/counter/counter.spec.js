import chai from 'chai';
import chaiImmutable from 'chai-immutable';

chai.use(chaiImmutable);

import counterReducer from './reducers';
import Immutable, {Record} from 'immutable';

describe('counter reducer', () => {
  it('should return the initial state', () => {
    const expected = Immutable.fromJS({"counter": null});

    chai.expect(
      counterReducer(undefined, {})
    ).to.equal(expected);
  })
});

