import { memo, VFC } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Button
} from "@chakra-ui/react";

type Props = {
  onClose: () => void; //function 関数の型
  isOpen: boolean;
  onClickHome: () => void; //function 関数の型
  onClickUserManagement: () => void; //function 関数の型
  onClickSetting: () => void; //function 関数の型
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const {
    onClose,
    isOpen,
    onClickHome,
    onClickUserManagement,
    onClickSetting
  } = props;

  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" onClick={onClickHome}>
              TOP
            </Button>
            <Button w="100%" onClick={onClickUserManagement}>
              ユーザー一覧
            </Button>
            <Button w="100%" onClick={onClickSetting}>
              設定
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
