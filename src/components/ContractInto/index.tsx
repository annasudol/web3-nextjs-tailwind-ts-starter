import { useAddress, useContract, useContractRead } from '@thirdweb-dev/react';
import { useMemo } from 'react';

import Spinner from '@/components/Spinner';

import { formatBigNumber } from '@/utils/formatBigNumbers';

const ContractInfo = () => {
  const address = useAddress();
  const { contract } = useContract(process.env.NEXT_PUBLIC_CONTRACT_ERC20);
  const { data: balance, isLoading: isLoadingBalance } = useContractRead(
    contract,
    'balanceOf',
    [address]
  );
  const { data: name, isLoading: isLoadingName } = useContractRead(
    contract,
    'symbol'
  );
  const { data: totalSupply, isLoading: isLoadingSupply } = useContractRead(
    contract,
    'totalSupply'
  );
  const balanceFormatted = balance && formatBigNumber(balance);
  const totalSupplyFormatted = totalSupply && formatBigNumber(totalSupply);
  const contractErc20Values = useMemo(() => {
    return isLoadingBalance || isLoadingName || isLoadingSupply ? (
      <Spinner />
    ) : (
      <>
        <p>
          {!address
            ? 'Not connected to Wallet'
            : `Balance: ${balanceFormatted} ${name}`}
        </p>
        <p>
          Total Supply: {totalSupplyFormatted} {name}
        </p>
      </>
    );
  }, [
    address,
    balanceFormatted,
    isLoadingBalance,
    isLoadingName,
    isLoadingSupply,
    name,
    totalSupplyFormatted,
  ]);

  return <div className='my-4'>{contractErc20Values}</div>;
};
export default ContractInfo;
