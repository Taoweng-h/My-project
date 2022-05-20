import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { RootState } from '@/store/index'
import { incrrment } from '@/store/modules/user'

function Login() {
  const { userName } = useAppSelector((state: RootState) => state.user)
  const dispatch = useAppDispatch()

  return <div onClick={() => dispatch(incrrment())}>{userName}</div>
}

export default Login
