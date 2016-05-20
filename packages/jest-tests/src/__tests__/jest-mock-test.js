/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @emails oncall+jsinfra
 */
'use strict';

jest.disableAutomock()
// jest.unmock('../sum')
// jest.mock('react-native')

jest.mock('../sum')

// jest.setMock('react-native', {})
// jest.mock('rimraf', () => ({}))

jest.mock('react-native', () => 1, {skipNodeResolution: true})
// jest.mock('react-native', () => 1)

// jest.mock('../sum', () => ({ value: 'my-mock' }))
// jest.mock('../lol')

describe('sum reducer', () => {
  let reducer

  beforeEach(() => {
    reducer = require('../sum')
    console.log(reducer)
  })

  describe('total sum', () => {
    it('adds sum items in cart', () => {
      expect(reducer.rn).toBe(1)
    })
  })
})
