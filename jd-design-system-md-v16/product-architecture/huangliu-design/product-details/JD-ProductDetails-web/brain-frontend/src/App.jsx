import { useState } from 'react'
import Sidebar from './components/Sidebar'
import ChatView from './pages/ChatView'
import ComponentLibrary from './pages/ComponentLibrary'
import ToolPage from './pages/ToolPage'
import SettingsView from './pages/SettingsView'
import DataBoard from './pages/DataBoard'
import KnowledgeBase from './pages/KnowledgeBase'
import IndustryMonitor from './pages/IndustryMonitor'
import TopHeader from './components/TopHeader'
import { pageConfigs } from './data/mockData'

export default function App() {
  const [activePage, setActivePage] = useState('chat')
  const [navContext, setNavContext] = useState(null)
  const isDark = true

  const handleNavigate = (pageId, context = null) => {
    setActivePage(pageId)
    setNavContext(context)
  }

  const renderPage = () => {
    switch (activePage) {
      case 'chat':
        return <ChatView onNavigate={handleNavigate} />
      case 'kb-component':
        return <ComponentLibrary onNavigate={handleNavigate} />
      case 'insight-archaeology':
        return <KnowledgeBase />
      case 'settings':
        return <SettingsView />
      case 'data-board':
        return <DataBoard />
      case 'monitor-industry':
        return <IndustryMonitor navContext={navContext} />
      default: {
        const config = pageConfigs[activePage]
        if (config) return <ToolPage config={config} />
        return <ChatView onNavigate={handleNavigate} />
      }
    }
  }

  return (
    <div className={`flex h-screen overflow-hidden ${isDark ? 'bg-background theme-dark' : 'bg-[#f5f6f8]'}`}>
      <Sidebar activePage={activePage} onNavigate={handleNavigate} variant={isDark ? 'dark' : 'light'} />
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {activePage === 'chat' && <TopHeader />}
        <div className="flex-1 overflow-auto relative">
          {renderPage()}
        </div>
      </main>
    </div>
  )
}
