import { StyleSheet } from 'react-native'

import EditScreenInfo from '@/components/EditScreenInfo'
import { Text, View } from '@/components/Themed'
import { Text as Text2, View as View2 } from 'react-native'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from '@/components/ui/input'
import React from 'react'

export default function TabOneScreen() {
  const [value, setValue] = React.useState('comfortable');

  function onLabelPress(label: string) {
    return () => {
      setValue(label);
    };
  }

  function onValueChange(value: string) {
    setValue(value);
  }

  return (
    <View style={styles.container}>
      <Text2 style={styles.title}>Tab One</Text2>
      <View className={'bg-blue-700 border-amber-700 border-4'}>
        <Text className={' border-amber-400 border-4'}>Note, Themed overwrites backgrounds.</Text>
      </View>
      <View2 className={' border-amber-400 border-4'}>
        <Text2 className="text-2xl font-bold text-blue-500">Welcome to Nativewind!</Text2>


        <RadioGroup value={value} onValueChange={onValueChange}>
          <View2 className="flex flex-row items-center gap-3">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1" onPress={onLabelPress('default')}>
              Default
            </Label>
          </View2>
          <View2 className="flex flex-row items-center gap-3">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2" onPress={onLabelPress('comfortable')}>
              Comfortable
            </Label>
          </View2>
          <View2 className="flex flex-row items-center gap-3">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3" onPress={onLabelPress('compact')}>
              Compact
            </Label>
          </View2>
        </RadioGroup>
        <Input placeholder={'hello there'} />
      </View2>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
