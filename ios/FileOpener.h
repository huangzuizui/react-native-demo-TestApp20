//
//  FileOpener.h
//  TestApp20
//
//  Created by SuJiexu on 16/4/27.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "RCTBridgeModule.h"
#import "RCTBridge.h"

@import UIKit;

@interface FileOpener : NSObject <RCTBridgeModule>
@property (nonatomic) UIDocumentInteractionController * FileOpener;
@end
