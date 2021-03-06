/* eslint-disable no-param-reassign */
/* eslint-disable arrow-body-style */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable object-shorthand */
/* eslint-disable indent */
import stocks from '../../components/data/stocks';

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS'(state) {
 state.stocks.forEach(stock => {
     stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
 })
    }
}

const actions = {
    buyStock: ({ commit }, order) => {
        console.log(order)
        commit('BUY_STOCKS', order);
    },
    initStocks: ({ commit }) => {
        commit('SET_STOCKS', stocks);
    },
    randomizeStock: ({ commit }) => {
        commit('RND_STOCKS');
    }
}

const getters = {
    stocks: state => {
        return state.stocks;
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
};