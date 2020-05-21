/* eslint-disable padded-blocks */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */
/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable import/prefer-default-export */
import Vue from 'vue';

export const fetchData = ({ commit }) => {
Vue.http.get('data.json')
.then(response => response.json())
.then(data => {
    if (data) {
    const stocks = data.stocks;
    const funds = data.funds;
    const stockPortfolio = data.stockPortfolio;
    const portfolio = {
        stockPortfolio,
        funds,
    };

    commit('SET_STOCKS', stocks);
    commit('SET_PORTFOLIO', portfolio);
}

});
};