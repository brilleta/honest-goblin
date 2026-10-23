import { useState } from 'react'
import { Button } from '@/components/ui/8bit/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/8bit/card'

function App() {
  const [scrap, setScrap] = useState(0)

  return (
    <main className="flex min-h-svh items-center justify-center bg-background p-4 text-foreground">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-base leading-relaxed sm:text-lg">
            Un Gobelin honnête
          </CardTitle>
          <CardDescription font="normal">
            Négoce douteux depuis… mardi
          </CardDescription>
        </CardHeader>
        <CardContent font="normal" className="text-center">
          <p className="text-sm text-muted-foreground">Ferraille</p>
          <p
            className="font-mono text-4xl font-bold tabular-nums"
            aria-live="polite"
          >
            {scrap.toLocaleString('fr-FR')}
          </p>
        </CardContent>
        <CardFooter className="justify-center pb-2">
          <Button onClick={() => setScrap((n) => n + 1)}>
            Fouiller un cadavre
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}

export default App
