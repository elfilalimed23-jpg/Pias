import 'package:flutter/material.dart';

void main() => runApp(const SyndicApp());

class SyndicApp extends StatelessWidget {
  const SyndicApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Syndic Mobile Suite',
      theme: ThemeData(useMaterial3: true),
      home: const Scaffold(
        body: Center(child: Text('Syndic Mobile Suite')),
      ),
    );
  }
}
