import chai, {expect} from 'chai';
import chaiImmutable from 'chai-immutable';
import * as actions from './actions';

chai.use(chaiImmutable);

import counterReducer, {InitialState} from './reducers';
import Immutable, {Record} from 'immutable';


const initialState = new InitialState();

describe('counter reducer', () => {
  it('should return the initial state', () => {
    expect(
      counterReducer(undefined, {})
    ).to.equal(initialState);
  });

  it('should set a counter', () => {
    const afterState = initialState.set('counter', 4);

    expect(
      counterReducer(initialState, {
        type: actions.SET_COUNTER,
        payload: 4
      })).to.equal(afterState);
  });

  it('should increment a counter', () => {
    const initialStateLocal = initialState.set('counter', 4);
    const afterState = initialState.set('counter', 5);

    expect(
      counterReducer(initialStateLocal, {
        type: actions.INCREMENT_COUNTER
      })).to.equal(afterState);
  });

});


