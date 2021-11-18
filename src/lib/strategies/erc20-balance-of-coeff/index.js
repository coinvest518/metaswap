import { strategy as erc20BalanceOfStrategy } from "../erc20-balance-of/index";

export const author = "jxde";
export const version = "0.1.0";

export async function strategy(space, network, provider, addresses, options, snapshot) {
	const score = await erc20BalanceOfStrategy(space, network, provider, addresses, options, snapshot);
	return Object.fromEntries(Object.entries(score).map((address) => [address[0], address[1] * options.coeff]));
}
