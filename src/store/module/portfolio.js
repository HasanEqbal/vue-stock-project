/* eslint-disable no-trailing-spaces */
/* eslint-disable no-dupe-args */
/* eslint-disable no-empty */
/* eslint-disable eqeqeq */
/* eslint-disable arrow-body-style */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable object-shorthand */
/* eslint-disable indent */
const state = {
    stocks: [],
    funds: 10000
};

const mutations = {
    'BUY_STOCKS'(state, { stockID, stockQuantity, stockPrice }) {
        const record = state.stocks.find(ele => ele.id == stockID);
        if (record) {
            record.stockQuantity += stockQuantity
        } else {
            state.stocks.push({
                id: stockID,
                stockQuantity: stockQuantity
            })
        }
        state.funds -= stockPrice * stockQuantity;
    },
    'SELL_STOCKS'(state, { stockID, quantity, stockPrice }) {
        const record = state.stocks.find(ele => ele.id == stockID);
        if (record.stockQuantity > quantity) {
            record.stockQuantity -= quantity
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1)
        }

        state.funds += stockPrice * quantity;
    },
    'SET_PORTFOLIO'(state, portfolio) {
       state.funds = portfolio.funds;
       state.stocks = portfolio.stockPortfolio;
    }
};

const actions = {
    sellStocks({ commit }, order) {
        commit('SELL_STOCKS', order)
    }
};

const getters = {
    stockPortfolio(state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(ele => ele.id == stock.id)
            return {
                id: stock.id,
                quantity: stock.stockQuantity,
                name: record.name,
                price: record.price,
            }
        })
    },
    funds(state) {
        return state.funds
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}