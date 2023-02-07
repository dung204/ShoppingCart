import { CustomerContext } from '@/contexts/CustomerContext';
import { useContext } from 'react';

function useCustomer() {
  return useContext(CustomerContext);
}

export default useCustomer;
