function maxProfit(prices: number[]): number {
  let min:number=prices[0];
  let profit:number =0;

  for(let i=0; i<prices.length; i++){
    if(prices[i] < min) min = prices[i]
    if(prices[i]-min > profit) profit= prices[i]-min
  }

  return profit
};