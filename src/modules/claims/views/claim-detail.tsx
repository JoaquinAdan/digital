import PATHS from '@/configs/constants/paths'
import AppLayout from '@/modules/shared/components/layout/app-layout'

const ClaimDetail = () => {
  return (
    <AppLayout title='Reclamos' returnPath={PATHS.ADMIN_CLAIMS}>
      <div>ClaimDetail</div>
    </AppLayout>
  )
}

export default ClaimDetail
