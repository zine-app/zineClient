import * as React from 'react'
import ZineHeader from 'app/components/ZineHeader'
import ZineNav from 'app/containers/ZineNav'
import ZineBody from 'app/components/ZineBody'
import 'app/styles/zineMasterPage'

interface TZineMasterPageProps {
  children?: any
  zine: any
  user: any
}

export default ({ zine, user, children }:TZineMasterPageProps) =>
  <div className="zineMasterPage">
    <ZineHeader zine={zine} />
    <ZineNav zine={zine} user={user} />
    <ZineBody>
      { children }
    </ZineBody>
  </div>
