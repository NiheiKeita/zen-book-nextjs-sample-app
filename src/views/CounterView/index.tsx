"use client"

import { useCounterView } from "./hooks"
import { Mode } from "./types"

export function CounterView() {
  const {
    count,
    handlePlusButtonClick,
    handleMinusButtonClick,
    selectMode
    handleChangeMode
  } = useCounterView()

  const modes: Mode[] = ['both' , 'plusOnly' , 'minusOnly']
  const modeLabels: Record<Mode, string> = {
    both: '両方表示',
    plusOnly: 'プラスのみ',
    minusOnly: 'マイナスのみ',
  }

  const showPlus  = selectMode === 'both' || selectMode === 'plusOnly'
  const showMinus = selectMode === 'both' || selectMode === 'minusOnly'

  return (
    <div className="max-w-md mx-auto mt-10 text-center">
      <h1 className="text-2xl font-bold">カウンター</h1>
      <p className="text-4xl my-4" data-testid="countText">{count}</p>
      <div className="flex justify-center gap-4"> 
        {showPlus &&
          <button
            className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-50 active:scale-95"
            onClick={handlePlusButtonClick}
            data-testid="plusButton"
          >
            プラス
          </button>
        }
        {showMinus &&
          <button
            className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-50 active:scale-95"
            onClick={handleMinusButtonClick} 
            data-testid="minusButton"
          >
              マイナス
          </button>
        }
      </div>
      <div className="mt-6">
        <div className="text-sm text-gray-600 mb-2">表示ボタンモード</div>
        <div className="flex flex-wrap gap-3">
          {modes.map((mode) => (
            <label key={mode} className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="mode"
                checked={mode === selectMode}
                onChange={() => handleChangeMode(mode)}
              />
              <span>{modeLabels[mode]}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}