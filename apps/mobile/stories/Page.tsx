import { useState } from 'react';

import { Linking, StyleSheet, Text, View } from 'react-native';

import { Header } from './Header';
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export const Page = () => {
  const [user, setUser] = useState<{ name: string } | undefined>();

  return (
    <View>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <View style={styles.section}>
        <Text role="heading" style={styles.h2}>
          Pages in Storybook
        </Text>
        <Text style={styles.p}>
          We recommend building UIs with a{' '}
          <Text
            style={[styles.a, { fontWeight: 'bold' }]}
            role="link"
            onPress={() => {
              Linking.openURL('https://componentdriven.org');
            }}
          >
            <Text>component-driven</Text>
          </Text>{' '}
          process starting with atomic components and ending with pages.
        </Text>
        <Text style={styles.p}>
          Render pages with mock data. This makes it easy to build and review page states without
          needing to navigate to them in your app. Here are some handy patterns for managing page
          data in Storybook:
        </Text>
        <View className={'border-4 border-blue-400'}>
          <Text>
            Use a higher-level connected component. Storybook helps you compose such data from the
            "args" of child component stories
          </Text>
          <Text>
            Assemble data in the page component from your services. You can mock these services out
            using Storybook.
          </Text>
        </View>


        <RadioGroup defaultValue="comfortable">
          <View className="flex flex-row items-center gap-3">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </View>
          <View className="flex flex-row items-center gap-3">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </View>
          <View className="flex flex-row items-center gap-3">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </View>
        </RadioGroup>
        <Text style={styles.p}>
          Get a guided tutorial on component-driven development at{' '}
          <Input className={'border-4 border-green-200'} placeholder={'hello'}/>
          <Text
            style={styles.a}
            role="link"
            onPress={() => {
              Linking.openURL('https://storybook.js.org/tutorials/');
            }}
          >
            Storybook tutorials
          </Text>
          . Read more in the{' '}
          <Text
            style={styles.a}
            role="link"
            onPress={() => {
              Linking.openURL('https://storybook.js.org/docs');
            }}
          >
            docs
          </Text>
          .
        </Text>
        <View style={styles.tipWrapper}>
          <View style={styles.tip}>
            <Text style={styles.tipText}>Tip </Text>
          </View>
          <Text>Adjust the width of the canvas with the </Text>
          <Text>Viewports addon in the toolbar</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontSize: 14,
    lineHeight: 24,
    paddingVertical: 48,
    paddingHorizontal: 20,
    marginHorizontal: 'auto',
    maxWidth: 600,
    color: '#333',
  },

  h2: {
    fontWeight: '900',
    fontSize: 32,
    lineHeight: 1,
    marginBottom: 4,
  },

  p: {
    marginVertical: 16,
    marginHorizontal: 0,
  },

  a: {
    color: '#1ea7fd',
  },

  ul: {
    paddingLeft: 30,
    marginVertical: 16,
  },

  li: {
    marginBottom: 8,
  },

  tip: {
    alignSelf: 'flex-start',
    borderRadius: 16,
    backgroundColor: '#e7fdd8',
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginRight: 10,
    marginBottom: 4,
  },
  tipText: {
    fontSize: 11,
    lineHeight: 12,
    fontWeight: '700',
    color: '#66bf3c',
  },

  tipWrapper: {
    fontSize: 13,
    lineHeight: 20,
    marginTop: 40,
    marginBottom: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  tipWrapperSvg: {
    height: 12,
    width: 12,
    marginRight: 4,
    marginTop: 3,
  },
});
