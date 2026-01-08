import { useNavigate } from 'react-router-dom';

import type { LinkButtonProps } from '@/global/types';

import { Button } from '@/components/ui/button';

const LinkButton: React.FC<LinkButtonProps> = ({ label, directionTo }) => {
  const navigate = useNavigate();
  const handleDirection = () => navigate(`${directionTo}`);

  return (
    <Button variant="outline" onClick={handleDirection}>
      {label}
    </Button>
  );
};

export default LinkButton;
