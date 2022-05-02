import Button from "./Button"
import { AdjustRounded } from "@mui/icons-material"
import { Avatar } from "@mui/material"
import Shop2OutlinedIcon from '@mui/icons-material/Shop2Outlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

const Sidebar = () => {
  return (
			<div className="w-72 pt-5 border-r h-screen bg-zinc-50 bg-opacity-10 fixed">
				<div className="flex justify-between px-5 mb-10">
					<h1 className="text-emerald-500 font-bold text-md">Minimal UI</h1>
					<AdjustRounded />
				</div>
				<div className="flex items-center bg-zinc-200 bg-opacity-50 p-4 mx-5 rounded-2xl my-4">
						<Avatar />
					<div className="flex flex-col grow ml-4">
						<h2 >Minimal UI</h2>
						<h3 className="text-gray-600">admin</h3>
					</div>
				</div>
				<div className="mt-2">
					<h4 className="uppercase font-bold text-md my-6 ml-10">General</h4>
					<Button Icon={AccountTreeOutlinedIcon}>
						App
					</Button>
					<Button Icon={Shop2OutlinedIcon}>
						E-Commerce
					</Button>
					<Button Icon={AssessmentOutlinedIcon}>
						Analytics
					</Button>
					<Button Icon={AccountBalanceOutlinedIcon}>
						Banking
					</Button>
					<Button Icon={EventOutlinedIcon}>
						Booking
					</Button>
					<h4 className="uppercase font-bold text-md my-6 ml-10">Management</h4>
					<Button Icon={PersonOutlineOutlinedIcon}>
						User
					</Button>
					<Button Icon={AttachMoneyOutlinedIcon}>
						E-Commerce
					</Button>
					<Button Icon={BookOutlinedIcon}>
						Blog
					</Button>
					<h4 className="uppercase font-bold text-md my-6 ml-10">App</h4>
					<Button Icon={MailOutlinedIcon}>
						Mail
					</Button>
				</div>
			</div>
  )
}

export default Sidebar
