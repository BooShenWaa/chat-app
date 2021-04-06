import React from "react";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarInfo,
  Line,
} from "./Sidebar.styled.js";
import { auth, db } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption.js";
import { useAuthState } from "react-firebase-hooks/auth";

function Sidebar() {
  const [channels] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Le Chat Room</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      {/* <SidebarOption Icon={InsertCommentIcon} title="Threads" /> */}

      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      {channels?.docs.map((doc) => (
        <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
      <SidebarOption Icon={AddIcon} addChannelOption title="Add channels" />

      <Line />
    </SidebarContainer>
  );
}

export default Sidebar;
