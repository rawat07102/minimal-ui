import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import NotificationsIcon from '@mui/icons-material/Notifications'
import GTranslateIcon from '@mui/icons-material/GTranslate'
import GroupIcon from '@mui/icons-material/Group'
import Avatar from "@mui/material/Avatar"

const Topbar = () => {
  return (
    <div className="w-full flex justify-between mt-4 mb-6 bg-transparent items-center">
			<div className="text-gray-500 bg-gray-100 rounded-2xl px-2 py-1 w-80 flex">
				<SearchOutlinedIcon />
				<input className="outline-none border-none bg-transparent grow ml-1" />
			</div>
			<div className="flex justify-between w-64 items-center">
				<GTranslateIcon />
				<NotificationsIcon />
				<GroupIcon />
				<Avatar />
			</div>
		</div>
  )
}

export default Topbar
