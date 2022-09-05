const Statuses = {
  processing: 'Processing',
  revoked: 'Revoked',
  issued: 'Issued',
}

const tableData = [
  {
    type: 'Credit Report',
    issuer: 'Experian',
    url: 'https://www.experian.com/',
    status: Statuses.issued
  },
  {
    type: 'Score Report',
    issuer: 'Equifax',
    url: 'https://www.equifax.com/',
    status: Statuses.processing
  },
  {
    type: 'eSafety (or Pink Slip)',
    issuer: 'NRMA',
    url: 'https://www.nrma.com.au/',
    status: Statuses.revoked
  }
]

const typeOptions = [
  {
    value: 'university_diploma',
    label: 'University diploma - Aequivalent',
    upload: true
  },
  {
    value: 'credit_report',
    label: 'Credit report - Experian',
    upload: false
  },
  {
    value: 'score_report',
    label: 'Score report - Equifax',
    upload: false
  },
  {
    value: 'pink_slip',
    label: 'eSafety (or Pink slip) - NRMA',
    upload: false
  }
]

const entities = [
  {
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    type: 'University Diploma',
    element: 'university_diploma',
    name: 'Aequivalent',
    url: 'https://www.aequivalent.ch',
  },
  {
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    type: 'University Diploma (fake)',
    element: 'university_diploma_fake',
    name: 'Aequivalent',
    url: 'https://www.aequivalent.com',
  },
  {
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    type: 'Credit Report',
    element: 'credit_report',
    name: 'Experian',
    url: 'https://www.experian.com',
  },
  {
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    type: 'Score Report',
    element: 'score_report',
    name: 'Equifax',
    url: 'https://www.equifax.com',
  },
  {
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    type: 'eSafety (or Pink Slip)',
    element: 'pink_slip',
    name: 'NRMA',
    url: 'https://www.nrma.com.au',
  }
]

const state = {
  tableData: tableData,
  typeOptions: typeOptions,
  isModalVisible: false,
  isViewModalVisible: false,
  currentRow: null
}

const mutations = {
  setIsModalVisible (state, status) {
    state.isModalVisible = status
  },
  setIsViewModalVisible (state, status) {
    state.isViewModalVisible = status
  },
  confirmRequest (state, request) {
    const entity = entities.find(({ element }) => element == request.element)
    const row = {
      type: entity.type,
      issuer: entity.name,
      url: entity.url,
      status: Statuses.processing
    }
    state.tableData.push(row)
  },
  setCurrentRow (state, row) {
    state.currentRow = row
  },
  removeCurrentRow (state) {
    state.tableData.splice(state.tableData.indexOf(state.currentRow), 1)
    state.currentRow = null
  }
}

const actions = {
  newRequest ({ commit }) {
    commit('setIsModalVisible', true)
  },
  closeModal ({ commit }) {
    commit('setIsModalVisible', false)
  },
  confirmRequest ({ commit }, request) {
    commit('confirmRequest', request)
  },
  setCurrentRow ({ commit }, row) {
    commit('setCurrentRow', row)
  },
  removeCurrentRow ({ commit }) {
    commit('removeCurrentRow')
  },
  clearSelection ({ commit }) {
    commit('setCurrentRow', null)
  },
  viewRequest ({ commit }) {
    commit('setIsViewModalVisible', true)
  },
  closeViewModal ({ commit }) {
    commit('setIsViewModalVisible', false)
  },
}

const getters = {
  isModalVisible (state) {
    return state.isModalVisible === true
  },
  isViewModalVisible (state) {
    return state.isViewModalVisible === true
  },
  currentRow (state) {
    return state.currentRow
  },
  isRowSelected (state) {
    return state.currentRow != null
  },
  statuses (state) {
    return Statuses
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}