import { StyleSheet, View, ScrollView } from 'react-native';
import { useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function CandidateProfileScreen() {
  const [activeTab, setActiveTab] = useState<'overview' | 'interviews' | 'documents'>('interviews');

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.header}>Candidate Profile</ThemedText>
      
      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <View 
          style={[styles.tab, activeTab === 'overview' && styles.activeTab]}
          onTouchEnd={() => setActiveTab('overview')}
        >
          <ThemedText style={[styles.tabText, activeTab === 'overview' && styles.activeTabText]}>
            Overview
          </ThemedText>
        </View>
        <View 
          style={[styles.tab, activeTab === 'interviews' && styles.activeTab]}
          onTouchEnd={() => setActiveTab('interviews')}
        >
          <ThemedText style={[styles.tabText, activeTab === 'interviews' && styles.activeTabText]}>
            Interviews
          </ThemedText>
        </View>
        <View 
          style={[styles.tab, activeTab === 'documents' && styles.activeTab]}
          onTouchEnd={() => setActiveTab('documents')}
        >
          <ThemedText style={[styles.tabText, activeTab === 'documents' && styles.activeTabText]}>
            Documents
          </ThemedText>
        </View>
      </View>

      {/* Tab Content */}
      <ScrollView style={styles.content}>
        {activeTab === 'overview' && (
          <View>
            <ThemedText type="subtitle">Overview Information</ThemedText>
            <ThemedText style={styles.text}>Candidate details and summary would go here.</ThemedText>
          </View>
        )}
        
        {activeTab === 'interviews' && (
          <View>
            <ThemedText type="subtitle">Scheduled Interviews</ThemedText>
            <View style={styles.interviewCard}>
              <ThemedText style={styles.interviewTitle}>Technical Interview</ThemedText>
              <ThemedText style={styles.text}>Date: January 15, 2026</ThemedText>
              <ThemedText style={styles.text}>Time: 2:00 PM</ThemedText>
              <ThemedText style={styles.text}>Interviewer: John Doe</ThemedText>
            </View>
            <View style={styles.interviewCard}>
              <ThemedText style={styles.interviewTitle}>Culture Fit Interview</ThemedText>
              <ThemedText style={styles.text}>Date: January 18, 2026</ThemedText>
              <ThemedText style={styles.text}>Time: 10:00 AM</ThemedText>
              <ThemedText style={styles.text}>Interviewer: Jane Smith</ThemedText>
            </View>
          </View>
        )}
        
        {activeTab === 'documents' && (
          <View>
            <ThemedText type="subtitle">Documents</ThemedText>
            <ThemedText style={styles.text}>Resume, cover letter, and other documents.</ThemedText>
          </View>
        )}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#007AFF',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    marginTop: 16, // Appropriate spacing between tabs and content
  },
  text: {
    marginBottom: 8,
    lineHeight: 20,
  },
  interviewCard: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  interviewTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
});
