// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

export function accessibilityProps(id) {
    return {testID: id, accessibilityLabel: id};
}